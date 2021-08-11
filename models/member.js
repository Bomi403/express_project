const fs = require('fs').promises;
const path = require('path');
const bcrypt = require('bcrypt');

const member = {
	/** 회원가입 */
	async join(data) {
		
		try {
			data.memPw = await bcrypt.hash(data.memPw, 10);
			delete data.memPwRe;
			
			const filePath = path.join(__dirname, "../data/member", data.memId + ".json");
			await fs.writeFile(filePath, JSON.stringify(data)); 
			return true; // 회원 가입 성공 
		} catch (err) {
			return false; // 회원 가입 실패 
		}
	},
	
};

module.exports = member;