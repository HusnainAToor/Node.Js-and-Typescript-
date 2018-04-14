const fn = () => console.log("hello world after 3000");
const delay1 =(fn,ms)=>{
    
    return () => {
        setTimeout(fn, ms)
    }
};

const delayedHello = delay1(fn,3000);
delayedHello();


