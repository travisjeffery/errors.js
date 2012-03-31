describe("$.fn.errors", function(){
  beforeEach(function(){
    this.errors = $("<div><ul></ul></div>")
    this.ul = this.errors.find("ul")
    this.list = $(this.errors).errors()
  })

  describe("#add", function(){
    it("shows the container", function(){
      this.errors.hide()
      this.list.errors("add","HI")
      expect(this.errors.css("display")).not.toBe("none")
    })

    it("adds an error as a list item", function(){
      this.list.errors("add", "Hi")
      expect(this.ul.find("li").text()).toBe("Hi")
    })

    it("adds many errors as list items", function(){
      this.list.errors("add", ["Hi", "Bye"])

      expect(this.ul.find("li:first").text()).toBe("Hi")
      expect(this.ul.find("li:last").text()).toBe("Bye")
    })

    it("clears out existing errors", function(){
      this.list.errors("add", ["Hi", "Bye"])
      this.list.errors("add", ["Hi", "Bye"])

      expect(this.ul.find("li").length).toBe(2)
    })
  })

  describe("#reset", function(){
    it("clears the list", function(){
      spyOn($.fn, 'empty')
      this.list.errors("reset")
      expect($.fn.empty).toHaveBeenCalled()
    })

    it("hides the container", function(){
      spyOn($.fn, 'hide')
      this.list.errors("reset")
      expect($.fn.hide).toHaveBeenCalled()
    })
  })

  describe("#show", function(){
    it("shows the container", function(){
      spyOn($.fn, 'show')
      this.list.errors("show")
      expect($.fn.show).toHaveBeenCalled()
    })
  })

  describe("#hide", function(){
    it("hides container", function(){
      spyOn($.fn, 'hide')
      this.list.errors("hide")
      expect($.fn.hide).toHaveBeenCalled()
    })
  })
});

