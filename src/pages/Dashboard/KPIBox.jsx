export default function KPIBox(
    {
        title,
        value
    }
){

    return(

        <div
            style={{
                border:"1px solid gray",
                padding:20,
                margin:10,
                width:200
            }}
        >

            <h3>

                {title}

            </h3>

            <h2>

                {value}

            </h2>

        </div>

    );

}