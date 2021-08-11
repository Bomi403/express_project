const express = require('express');
const { joinValidator } = require('../middleware/validator');
const { alert, go } = require("../lib/common");
const member = require("../models/member");
const router = express.Router();

router.route("/join")
	.get((req, res) => {
		 // 회원 가입 양식 
		 
		 return res.render("member/join");
	})
	.post(joinValidator, async (req, res) => {
		const result = await member.join(req.body);
		if (result) { // 회원 가입 성공 
			return go("/member/login", res, "parent");
		}
		
		// 회원 가입 실패 
		return alert("회원가입에 실패하였습니다.", res);
		
	});
	



module.exports = router;