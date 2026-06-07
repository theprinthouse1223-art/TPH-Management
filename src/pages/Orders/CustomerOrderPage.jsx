export default function CustomerOrderPage(){

    return(

        <div>

            <h1>

                Customer Order

            </h1>

            <input
                placeholder="Customer Name"
            />

            <br/>

            <input
                placeholder="Phone Number"
            />

            <br/>

            <select>

                <option>
                    Coffee Mug
                </option>

                <option>
                    Photo Frame
                </option>

                <option>
                    Shirt
                </option>

                <option>
                    Keychain
                </option>

                <option>
                    Bottle
                </option>

            </select>

            <br/>

            <input
                type="file"
            />

            <br/>

            <button>

                Save Order

            </button>

        </div>

    );

}