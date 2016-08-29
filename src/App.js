import React from 'react'
import Aside from "./Aside.js"
import Account from "./Account.js"
export default React.createClass({
	render: function() {
		return (
			<div className="mainbody">
				<Aside />
				<Account />
			</div>
		);
	}
})