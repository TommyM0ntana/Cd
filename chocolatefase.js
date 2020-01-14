


    function chocolateFeast(n, c, m) {
      let wrappers = Math.floor(n / c);
          let count = wrappers;
      
          while(wrappers >= m){
              let add = Math.floor(wrappers/m);
              wrappers -= (add * m);
              wrappers += add;
              count += add;
          }
          return count;
      
      }

  