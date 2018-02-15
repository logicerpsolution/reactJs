import React from 'react';
import{ Component } from 'react';
import Providers from '../_components/providers'

export default class homeChild extends Component {
  render() {
    return (
        <div className="page-content-wrap">
            <div className="row"> 
                <div className="col-12">
                    <div className="card card-dark ">
                        <div className="card-header"><span className="medical-icon-i-cardiology"></span> Select Provider</div>
                            <div className="card-body">
                                <div className="row justify-content-md-center form-inner">
                                    <div className="col-md-6">
                                        <Providers provider={this.props.miscellaneous.providers} />
                                        <div className="form-group text-center">
                                            <a href="javascript:void();" className="btn btn-blue md-btn-block hvr-ripple-out">Find</a>
                                        </div>
                                    </div>
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
    );
  }
}
