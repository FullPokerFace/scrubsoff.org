
export default function Section({title, component, bgImage = '', bgColor = '', id}) {

    const hasBackgroundColor = bgColor ?  {backgroundColor : `${bgColor}`} : null;


    return (
        <section className="section"  style={hasBackgroundColor} id = {id}>
        {bgImage ? <div className='bg-overlay' style={ {backgroundImage : `url(${bgImage})` }}></div> : null}
            <h2>{title}</h2>
            <div className="section-content">
                <div className="max-width" >

                {component}
                </div>
            </div>
        </section>
    )
}
