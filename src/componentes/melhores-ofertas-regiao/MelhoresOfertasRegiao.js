import React from 'react';

export default class MelhoresOfertasRegiao extends React.Component {
    render() {
        return (
            <div>
                <h1 className="my-4">Melhores Ofertas na Minha Região</h1>

                <div className="row">
                    <div className="col-lg-4 mb-4">
                        <div className="card h-100">
                            <h4 className="card-header">Card Title</h4>
                            <div className="card-body">
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>
                            </div>
                            <div className="card-footer">
                                <a href="#" className="btn btn-primary">Learn More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 mb-4">
                        <div className="card h-100">
                            <h4 className="card-header">Card Title</h4>
                            <div className="card-body">
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis ipsam eos, nam perspiciatis natus commodi similique totam consectetur praesentium molestiae atque exercitationem ut consequuntur, sed eveniet, magni nostrum sint fuga.</p>
                            </div>
                            <div className="card-footer">
                                <a href="#" className="btn btn-primary">Learn More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 mb-4">
                        <div className="card h-100">
                            <h4 className="card-header">Card Title</h4>
                            <div className="card-body">
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>
                            </div>
                            <div className="card-footer">
                                <a href="#" className="btn btn-primary">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}