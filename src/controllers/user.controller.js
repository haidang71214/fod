import sequelize from "../models/connect.js";
import initModels from "../models/init-models.js";

const models = initModels(sequelize);

const getLikesByUser = async (req, res) => {
   // lấy cái like_id theo user
   // lấy nhà hàng được like 
   try {
      const { user_id } = req.params;
      const data = await models.userr.findAll({
         where:{ 
            user_id :user_id
         },
         include:[{
            model : models.like_res,
            as:'like_res',
            attributes:['res_id','date_like'],
            include:[{
               model : models.restaurant,
               as:'re',
               attributes:['res_name']
            }]
         }]
      });

      return res.status(200).json(data);
   } catch (error) {
      return res.status(500).json({ message: "Error fetching likes", error });
   }
};
const getBlame = async(req,res) =>{
   try {
      const {user_id} = req.params;
      const data = await models.userr.findAll({
         where:{
            user_id,
         },
         attributes:['user_id','full_name','email'],
         include:[{
            model : models.rate_res,
            as:'rate_res',
            attributes:['amount','date_rate'],
            include:[{
               model:models.restaurant,
               as:'re',
               attributes:["res_id","res_name"]
            }]
         }]
         
      })
      return res.status(200).json(data)
   } catch (error) {
      return res.status(500).json(error)
   }
}
const order = async (req, res) => {
  try {
    let { user_id } = req.params;
    let data = await models.userr.findAll({
      where: { user_id },
      include: [
        {
          model: models.orderr,
          as: 'orderrs',
          include: [{
            model: models.food, // Bao gồm thông tin về thực phẩm
            as: 'food',
            attributes: ['food_id', 'food_name', 'price'], // Chọn các thuộc tính cần thiết
          }]
        }
      ]
    });

    if (!data.length) {
      return res.status(404).json({ message: 'No orders found for this user' });
    }

    return res.status(200).json(data);
  } catch (error) {
    console.error(error); // In lỗi ra console để dễ dàng debug
    return res.status(500).json({ message: 'Lỗi server', error: error.message });
  }
}

export {
    getLikesByUser,
    getBlame,
   order,
};
