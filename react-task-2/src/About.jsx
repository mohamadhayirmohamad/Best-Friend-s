import './About.css'


function About() {
    return (
        <>

    




            {/* warning text  */}
            <div className="bg-warning text-center py-5" style={{
                position: "relative",
                bottom: "0",
                left: "0",
                width: "100%",
                height: "auto"
                , fontSize: "2rem"
            }}>
                <h4 style={{ fontSize: "2.5rem" }}>Our Mission</h4>
                <div className="d-flex justify-content-center mt-5">
                    <p style={{ fontSize: "1rem", width: "400px" }} className=" fw-bold  " >We want to help you give your pet the very best quality of life. In our opinion, the best way of doing this is to see the world as your pet sees it. We take this approach for everything from food and snacks to toys, bedding and other accessories. Every item we carry is something we would give to our own pets, with love and care.</p>
                </div>

            </div>

            {/* dog img  */}

            <div className="container mt-5 text-center">
                <div className="row align-items-center">
                    <div className="col-md-6 d-flex justify-content-center">
                        <div className="circle-image">
                            <img
                                src="https://assets.nicepagecdn.com/11a8ddce/6171861/images/adorable-jack-russell-retriever-puppy-portrait.jpg"
                                alt="Cat"
                                className="img-fluid rounded-circle"
                            />
                        </div>
                    </div>
                    <div className="col-md-6 text-md-start mt-4 mt-md-0">
                        <p style={{ fontSize: "1.2rem" }} >“Dogs are my best friends, my confidants, my inspiration. I can t imagine starting my day with a snuggle from my dog Charlie.”</p>
                        <h4 style={{ fontSize: "2.0rem" }} className="fw-bold">Co-owner</h4>
                        <p style={{ fontSize: "3.3rem" }} >Linda Larson</p>
                        <p style={{ fontSize: "1.3rem" }}>
                            Image from{" "}
                            <a style={{ color: " #6c63ff" }} href="#" target="_blank" rel="noreferrer">
                                Freepik
                            </a>
                        </p>

                    </div>
                </div>
            </div>
            {/* dog img end  */}

            {/* start dog cards  */}

            <div className="">
                <div className="container mt-5">

                    <div className="text-center mb-5">
                        <h2 style={{ fontSize: "3rem" }}>Choose a Category</h2>

                    </div>


                    <div className="row text-center">

                        <div className="col-md-4 mb-4">
                            <div className="card h-100">
                                <img src="https://assets.nicepagecdn.com/11a8ddce/6171861/images/4.jpg" alt="Sleep" className="card-img-top" />
                            </div>
                        </div>


                        <div className="col-md-4 mb-4">
                            <div className="card h-100">
                                <img src="https://assets.nicepagecdn.com/11a8ddce/6171861/images/1.jpg" alt="Sleep" className="card-img-top" />
                            </div>
                        </div>





                        <div className="col-md-4 mb-4">
                            <div className="card h-100">
                                <img src="https://assets.nicepagecdn.com/11a8ddce/6171861/images/2.jpg" alt="Sleep" className="card-img-top" />
                            </div>
                        </div>



                        <div className="col-md-4 mb-4">
                            <div className="card h-100">
                                <img src="https://assets.nicepagecdn.com/11a8ddce/6171861/images/5.jpg" alt="Sleep" className="card-img-top" />
                            </div>
                        </div>

                        <div className="col-md-4 mb-4">
                            <div className="card h-100">
                                <img src="https://assets.nicepagecdn.com/11a8ddce/6171861/images/3.jpg" alt="Sleep" className="card-img-top" />
                            </div>
                        </div>

                        <div className="col-md-4 mb-4">
                            <div className="card h-100">
                                <img src="https://assets.nicepagecdn.com/11a8ddce/6171861/images/6.jpg" alt="Sleep" className="card-img-top" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* end dog cards  */}
            {/* 2-dog img  */}

            <div className="container mt-5 text-center">
                <div className="row align-items-center">

                    <div className="col-md-6 text-md-start mt-4 mt-md-0">
                        <p style={{ fontSize: "1.2rem" }} >“Dogs are my best friends, my confidants, my inspiration. I can t imagine starting my day with a snuggle from my dog Charlie.”</p>
                        <h4 style={{ fontSize: "2.0rem" }} className="fw-bold">Co-owner</h4>
                        <p style={{ fontSize: "3.3rem" }} >Kira Petrova</p>
                        <p style={{ fontSize: "1.3rem" }}>
                            Image from{" "}
                            <a style={{ color: " #6c63ff" }} href="#" target="_blank" rel="noreferrer">
                                Freepik
                            </a>
                        </p>

                    </div>

                    <div className="col-md-6 d-flex justify-content-center">
                        <div className="circle-image">
                            <img
                                src="https://assets.nicepagecdn.com/11a8ddce/6171861/images/2.jpg"
                                alt="Cat"
                                className="img-fluid rounded-circle"
                            />
                        </div>
                    </div>

                </div>
            </div>

            {/* end 2-dog img  */}

            {/* footers  */}
            <div className="bg-light py-5 mt-5">
                <div className="container text-center">
                    <h3 className="mb-5">Why Pets Owners Loves Us</h3>
                    <div className="row">
                        <div className="col-md-3">
                            <div className="image-box">
                                <img
                                    src="https://assets.nicepagecdn.com/11a8ddce/6171861/images/3937026.png"
                                    alt="Quality"
                                    className="img-fluid rounded"
                                />
                            </div>
                            <h5 className="mt-3">Quality</h5>
                        </div>
                        <div className="col-md-3">
                            <div className="image-box">
                                <img
                                    src="https://assets.nicepagecdn.com/11a8ddce/6171861/images/13341111.png"
                                    alt="Fair Pricing"
                                    className="img-fluid rounded"
                                />
                            </div>
                            <h5 className="mt-3">Fair pricing</h5>
                        </div>
                        <div className="col-md-3">
                            <div className="image-box">
                                <img
                                    src="https://assets.nicepagecdn.com/11a8ddce/6171861/images/518456.png"
                                    alt="Transparency"
                                    className="img-fluid rounded"
                                />
                            </div>
                            <h5 className="mt-3">Transparency</h5>
                        </div>
                        <div className="col-md-3">
                            <div className="image-box">
                                <img
                                    src="https://assets.nicepagecdn.com/11a8ddce/6171861/images/11126193.png"
                                    alt=""
                                    className="img-fluid rounded"
                                />
                            </div>
                            <h5 className="mt-3">Family business</h5>
                        </div>
                    </div>
                </div>
            </div>




            <div className="container text-center py-5">
                <img className='p-3 ' style={{ backgroundColor: " #6c63ff", width: "90px", height: "90px", borderRadius: "40%" }} src="data:image/png;base64,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" alt="" />
                <h2 className="mt-3">Follow us on Instagram</h2>
                <p className="text-muted frm">
                    Image from <a href="https://www.freepik.com" target="_blank" rel="noopener noreferrer">Freepik</a>
                </p>
                <div className="row mt-4">
                    <div className="col-md-3">
                        <div className="card h-100">
                            <img
                                src="https://assets.nicepagecdn.com/11a8ddce/6171861/images/happy-dog-holding-bone-with-his-paws-1.jpg"
                                alt="Dog 1"
                                className="card-img-top img-fluid"
                            />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card h-100">
                            <img
                                src="https://assets.nicepagecdn.com/11a8ddce/6171861/images/grey-kitty-with-monochrome-wall-her_23-2148955113.jpeg"
                                alt="Cat"
                                className="card-img-top img-fluid"
                            />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card h-100">
                            <img
                                src="https://assets.nicepagecdn.com/11a8ddce/6171861/images/chihuahua-looking-away-yellow-background.jpg"
                                alt="Dog 2"
                                className="card-img-top img-fluid"
                            />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card h-100">
                            <img
                                src="https://assets.nicepagecdn.com/11a8ddce/6171861/images/beautiful-cat-portrait-close-up.jpg"
                                alt="Cat 2"
                                className="card-img-top img-fluid"
                            />
                        </div>
                    </div>
                </div>

            </div>


            <div className="bg-purple text-white py-5">
                <div className="container text-center">
                    <h2 className="mb-4 fw-bold">Subscribe to Our Newsletter</h2>
                    <form className="d-flex justify-content-center align-items-center gap-4">
                        <div className="form-group mb-0">
                            <label htmlFor="email" className="form-label d-block text-start">
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                className="form-control custom-input"
                                placeholder="Enter a valid email address"
                            />
                        </div>
                        <div className="form-group mb-0">
                            <label htmlFor="name" className="form-label d-block text-start">
                                Name
                            </label>
                            <input
                                id="name"
                                type="text"
                                className="form-control custom-input"
                                placeholder="Enter your Name"
                            />
                        </div>
                        <button
                            type="submit"
                            className="btn btn-warning text-dark fw-bold px-4 py-2"
                            style={{ alignSelf: "flex-end" }}
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>




            <footer className="bg-dark text-white text-center py-3">
                <p className="mb-0">Sample text. Click to select the Text Element.</p>

                <p>This site was created with the Nicepage
                    <a style={{ color: "white" }} href="nicepage"></a>
                </p>


            </footer>



            {/* end footers  */}
        </>
    )
}



export default About;