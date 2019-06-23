class Apple {
  constructor(x,y) {
    this.position={};
    this.position.x=Math.round(x / 10) * 100
    this.position.y=Math.round(y / 10) * 100;

  }
  saludar(){
      console.log('Apple');
  }

  
}
export default Apple;