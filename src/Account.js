import React from 'react'
export default React.createClass({
	render: function() {
		return (
		<div className="content">
			<div className="conTitlebar">
				<h3>账户资料</h3>
			</div>
			<div className="conBody">
				<div className="account">
					<p><span className="accAttrName">真实姓名：</span><span className="accName">陈小林</span><span className="accVerified ">已实名</span></p>
					<p><span className="accAttrName">身份证号：</span><span className="accId">4301************34</span></p>
					<p><span className="accAttrName">手机号码：</span><span className="accTel">138******88</span><a href="#">修改</a></p>
					<p><span className="accAttrName">邮&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;箱：</span><span className="accEmail">hujfhs@163.com</span><a href="email-modify.html">修改</a></p>
				</div>

			</div>
		</div>
		);
	}
})