angular.module('jsCodingTest', ['cpLib'
    // Add module dependencies here.
]);

angular.module('jsCodingTest').controller('GiveTheGovernmentABurrito', function(PackagesFactory) {

    var self = this

    self.foodType =''

    self.cuisineTypes = []

    self.change = function() {
      self.getFoods()
    }

    self.getFoods = function() {
      PackagesFactory.searchPackages('','SW1A0AA').then(function(response) {
        self.foods = response.data.packages
        //console.log(self.foods)
      })

    }

    self.getFoods()

    PackagesFactory.getCuisineTypes().then(function(response){
      response.data.cuisineTypes.forEach(function(e,i,a) {
        self.cuisineTypes.push(e)
      })
      console.log(self.cuisineTypes)
    })

  })




    // Your JavaScript goes here.
    // Your code should use our JS library's `PackagesFactory.searchPackages` method to search
    // for burritos that can be delivered to the Houses of Parliament in London.
    // The API URL that should be called is:
    // https://api.citypantry.com/packages/search?name=Burrito&postcode=SW1A%200AA

