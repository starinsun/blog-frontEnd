/*
 * @Date: 2019-11-01 01:52:49
 * @LastEditors  : Asen Wang
 * @LastEditTime : 2020-01-13 23:27:36
 * @content: I
 */
import Header2 from "../components/Header2";
import Head from "next/head";
import { Card } from "antd";

const Life = () => {
  const { Meta } = Card;
  const ins = [
    {
      _id: 1,
      image: "http://eswang.gitee.io/blog_pic/image/3.png",
      head: "这是第一次去波兰的我"
    },
    {
      _id: 2,
      image: "http://eswang.gitee.io/blog_pic/image/2.jpg",
      head: "这是第二次"
    }
  ];
  return (
    <>
      <Head>
        <title>Life</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header2 />
      <div className='life_base'>
        {ins.map(item => (
          <div key={item._id} className={item._id}>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt={item.head} src={item.image} />}
            >
              <Meta title={item.head} />
            </Card>
          </div>
        ))}
      </div>
    </>
  );
};

export default Life;
