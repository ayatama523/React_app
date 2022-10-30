import {useState} from "react";
import {Content, Title, PublishButton} from "./index";
// import PublishButton from "./PublishButton";
// import { Title } from './Title'
// import { Content } from './Content'

const Article = (props) => {
  const [isPublished, setisPublished] = useState(false)
  const publishArticle = () => {
    setisPublished(true)
  }

  return (
    <div>
      <Title title={props.title} />
      <Content content={props.content} />
      <PublishButton isPublished={isPublished} onClick={publishArticle}/>
      <div>{props.title}</div>
    </div>
  );
};

export default Article;