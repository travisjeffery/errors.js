Errors = function(element){
  _.bindAll(this)
  this.container = element
  this.list = element.find("ul")
}

_(Errors.prototype).extend({
  add: function(error){
    var errors = this.buildErrorList(error)

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

  buildErrorList: function(errors){
    var errorArray = _.flatten([errors]),
    stringToItem = function(message){return "<li>"+ message +"</li>"},
    errorList = _.map(errorArray, stringToItem).join("\n")

    return errorList
  }
});
