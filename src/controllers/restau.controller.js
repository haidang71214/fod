import sequelize from "../models/connect.js";
import initModels from "../models/init-models.js";
const models = initModels(sequelize);

const getLikeByRes = async (req, res) => {
   try {
      const { res_id } = req.params;

      const data = await models.restaurant.findOne({
         where: { res_id },
         include: [{
            model: models.like_res,
            as: 'like_res',
            include: [{
               model: models.userr,
               as: 'user',
               attributes: ['user_id', "full_name", "email"]
            }]
         }]
      });

      if (!data) {
         return res.status(200).json('Bố này chưa được like');
      }

      return res.status(200).json(data);
   } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Lỗi server', error: error.message });
   }
};

const blame = async (req, res) => {
   try {
      const { res_id } = req.params;

      // Thực hiện truy vấn để lấy thông tin nhà hàng và đánh giá
      const data = await models.restaurant.findOne({
         where: { res_id },
         include: [{
             model: models.like_res,
             as: 'like_res',
             include: [{
                 model: models.userr,
                 as: 'user',
                 attributes: ['user_id', "full_name", "email"]
             }]
         }]
     });
     
      // Kiểm tra nếu không có dữ liệu

      // Trả về dữ liệu cho client
      return res.status(200).json(data);
   } catch (error) {
      console.error(error); // Ghi lại lỗi vào console để dễ dàng theo dõi
      return res.status(500).json({ message: "Server error", error: error.message }); // Gửi thông điệp lỗi
   }
};


export {
   getLikeByRes,
   blame,
} 