
const uploadFileUrl = 'http://localhost:8081/competition/file/uploadFile/';

const uploadNoticeFileUrl = 'http://localhost:8081/competition/file/uploadNoticeFile/'

const exportUserList = 'http://localhost:8081/competition/competition/export';

const exportTeamList = 'http://localhost:8081/competition/competition/exportTeam';


export default{
    uploadFileUrl,    //全局文件上传路径
    exportUserList,  //个人赛报名名单Excel导出请求路径
    exportTeamList,   //组队赛报名名单Excel导出请求路径
    uploadNoticeFileUrl, //全局通知文件上传路径
}