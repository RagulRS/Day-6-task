
  class UberPriceCalculator {
    constructor(distance, timeOfDay, isRushHour) {
      this.distance = distance; 
      this.timeOfDay = timeOfDay; 
      this.isRushHour = isRushHour; 
    }
  
    calculatePrice() {
      let baseFare = 5; 
      let perMileRate = 2; 
      let perMinuteRate = 0.3; 
      let totalFare = baseFare + (this.distance * perMileRate) + (this.timeOfDay === 'night' ? 1 : 0) + (this.isRushHour ? 1.5 : 1) * (this.distance * perMinuteRate);
      return `Your Uber ride will cost Rs.${totalFare.toFixed(2)}`;
    }
  }
  
  const uberRide = new UberPriceCalculator(11, 'Night', true);
  console.log(uberRide.calculatePrice());
  