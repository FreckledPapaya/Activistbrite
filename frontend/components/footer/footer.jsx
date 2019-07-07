import React from 'react';
import { connect } from 'react-redux';

class Footer extends React.Component {
    render () {
       return (
            <div className="global_footer_container">
                <footer>
                    <div className="copyright_container">
                        <p>2019 Activistbrite</p>
                    </div>
                </footer>
            </div>
        )
    }
}

export default connect(null, null)(Footer);
// export default Footer;