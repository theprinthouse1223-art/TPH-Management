import {
    useState
} from "react";

import {
    universalSearch
} from "../../services/searchService";

export default function UniversalSearchPage(){

    const [text,
           setText] =
        useState("");

    const [result,
           setResult] =
        useState(null);

    async function search(){

        const data =

            await universalSearch(
                text
            );

        setResult(
            data
        );

    }

    return(

        <div>

            <h1>

                Universal Search

            </h1>

            <input

                value={text}

                onChange={
                    e=>
                    setText(
                        e.target.value
                    )
                }

            />

            <button

                onClick={
                    search
                }

            >

                Search

            </button>

        </div>

    );

}