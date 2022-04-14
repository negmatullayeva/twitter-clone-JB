import PostListItem from "../PostListItem/PostListItem";
import "./PostList.css";

const PostList = ({ posts, onDelete }) => {
  // const dell=()=>{
  //   posts.map((item, index)=>{posts.splice(index, 1)})
  // }
  const elements = posts.map((item) => {
    const { id, ...itemPrps } = item;
    return (
      <li key={id} className="list-group-item">
        <PostListItem {...itemPrps} onDelete={(id) => onDelete(id)} />
      </li>
    );
  });

  return <ul className="app-list list-group">{elements}</ul>;
};
export default PostList;
