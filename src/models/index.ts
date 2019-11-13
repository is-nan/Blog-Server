import Article from './Article'
import Category from './Category'
import Comment from './Comment'
import Link from './Link'
import Tag from './Tag'
import User from './User'

Article.hasMany(Category)
Article.hasMany(Tag)
Category.belongsTo(Article)
Tag.belongsTo(Article)
Article.sync()
Category.sync()
Comment.sync()
Link.sync()
User.sync()
Tag.sync()

export default {Article,Category,Comment,Link,Tag,User}

