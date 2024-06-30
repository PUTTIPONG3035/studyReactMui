import styles from './Button.module.css'

function Button(){
    let count = 0;
    const handleClick = (name : string) => {
        if(count < 3){
            count++;
            console.log(`${name} you clicked me ${count} time/s`);
        }
        else{
            console.log(`${name} stop clicking me!`);
        }
    }
    const handleClick2 = (name: string) => console.log(`${name} stop clicking me`);
  
    return(
   

        <button className={styles.button} onClick={() => handleClick("Folk")}>Click me</button>
        
    );
}

export default Button