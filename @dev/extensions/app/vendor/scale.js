
function LIFT_Scale_WebSite() {
  for (var divMain of document.getElementsByTagName('html')) {
    // drag the section
    for (var divSection of divMain.getElementsByTagName('body')) {
      // when mouse is pressed store the current mouse x,y
      var previousX, previousY
      divSection.addEventListener('mousedown', (event) => {
        previousX = event.pageX
        previousY = event.pageY
      })

      // when mouse is moved, scrollBy() the mouse movement x,y
      divSection.addEventListener('mousemove', (event) => {
        // only do this when the primary mouse button is pressed (event.buttons = 1)
        if (event.buttons) {
          var dragX = 0
          var dragY = 0
          // skip the drag when the x position was not changed
          if (event.pageX - previousX !== 0) {
            dragX = previousX - event.pageX
            previousX = event.pageX
          }
          // skip the drag when the y position was not changed
          if (event.pageY - previousY !== 0) {
            dragY = previousY - event.pageY
            previousY = event.pageY
          }
          // scrollBy x and y
          if (dragX !== 0 || dragY !== 0) {
            divMain.scrollBy(dragX, dragY)
          }
        }
      })
    }

    // zoom in/out on the section
    var scale = 1
    var factor = 0.05
    var max_scale = 10

    divMain.addEventListener('wheel', (e) => {
      // preventDefault to stop the onselectionstart event logic
      for (var divSection of divMain.getElementsByTagName('body')) {
        e.preventDefault();
        var delta = e.delta || e.wheelDelta;
        if (delta === undefined) {
          //we are on firefox
          delta = e.originalEvent.detail;
        }
        delta = Math.max(-1, Math.min(1, delta)) // cap the delta to [-1,1] for cross browser consistency
        offset = { x: divMain.scrollLeft, y: divMain.scrollTop };
        image_loc = {
          x: e.pageX + offset.x,
          y: e.pageY + offset.y
        }

        zoom_point = { x: image_loc.x / scale, y: image_loc.y / scale }

        // apply zoom
        scale += delta * factor * scale
        scale = Math.max(1, Math.min(max_scale, scale))

        zoom_point_new = { x: zoom_point.x * scale, y: zoom_point.y * scale }

        newScroll = {
          x: zoom_point_new.x - e.pageX,
          y: zoom_point_new.y - e.pageY
        }


        divSection.style.transform = `scale(${scale}, ${scale})`
        divMain.scrollTop = newScroll.y
        divMain.scrollLeft = newScroll.x
      }


    })
  }

}