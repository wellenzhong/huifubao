import React from 'react'
export default React.createClass({
	render: function() {
		return (
						<aside>
			<ul className="navUl">
				<h3>我的慧付宝</h3>
				<li ><a href="#" className="active">首页<span className="arrow"></span></a></li>
				<li><a href="#">账户资料<span className="arrow"></span></a></li>
				<li><a href="#">修改手机号<span className="arrow"></span></a></li>
				<li><a href="#">修改支付密码<span className="arrow"></span></a></li>
				<li><a href="#">修改邮箱 <span className="arrow"></span></a></li>
				<li><a href="#">我的银行卡<span className="arrow"></span></a></li>
				<li><a href="#">提现<span className="arrow"></span></a></li>
				<li><a href="#">交易记录<span className="arrow"></span></a></li>
			</ul>
		</aside>
		);
	}
})