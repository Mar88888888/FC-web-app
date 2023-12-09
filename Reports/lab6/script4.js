function Storage(initialItems) {
    this.items = initialItems || [];
  
    this.getItems = function() {
      return this.items;
    };
  
    this.addItems = function(item) {
      this.items.push(item);
    };
  
    this.removeItem = function(item) {
      const index = this.items.indexOf(item);
      if (index !== -1) {
        this.items.splice(index, 1);
      }
    };
  }
  
  const arr = ['apple', 'banana', 'mango'];
  const storage = new Storage(arr);
  
  console.log("Initial items:", ...storage.getItems()); 
  
  storage.addItems('orange');
  console.log("After adding 'orange':", ...storage.getItems());
  
  storage.removeItem('banana');
  console.log("After removing 'banana':", ...storage.getItems());
  