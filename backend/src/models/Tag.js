export default (sequealize,{ UUID, STRING, UUIDV4, }) => {
   const Tag = sequealize.define("Tag", {
      id : {
         primaryKey     :  true,
         allowNull      :  false,
         type           :  UUID,
         defaultValue   :  UUIDV4()
      },
      name : {
         type      : STRING,
         allowNull : false
      }
   })

   return Tag
}