import css from "./index.module.css"
console.log(css);

export function Module(prop) {
    console.log(prop)
   return(
    <>
        <div className={css.box}>
            {prop.children}
        </div>
        <div className={css.anhMau}>
            <img src="/glassesImage/model.jpg" alt="Mẫu" />
        </div>
        <div className={css.anhMauf}>
            <img src="/glassesImage/model.jpg" alt="Mẫu" /> 
        </div>
    </>
   )
}



