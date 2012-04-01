(function($, _){
  $.widget("travisjeffery.errors", {
    _create: function(){
      _.bindAll(this)
      this.container = this.element
      this.list = this.element.find("ul")
    }
  })

  $.extend($.travisjeffery.errors.prototype, {
    add: function(error){
      var errors = this._buildErrorList(error)

      this.reset()
      this.show()

      this.list.append(errors)
    },

    show: function(){
      this.container.show()
    },

    hide: function(){
      this.container.hide()
    },

    reset: function(){
      this.hide()
      this.list.empty()
    },

    handle: function(xhr, status, error){
      var errors = $.parseJSON(xhr.responseText).errors
      this.add(errors)
    },

    _buildErrorList: function(errors){
      var errorArray = $.makeArray(errors),
      stringToItem = function(message){return "<li>"+ message +"</li>"},
      errorList = $.map(errorArray, stringToItem).join("\n")

      return errorList
    }
  }) 
}(jQuery, _));
