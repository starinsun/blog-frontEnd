/*
 * @Date: 2019-11-01 01:52:49
 * @LastEditors  : Asen Wang
 * @LastEditTime : 2020-01-21 19:07:25
 * @content: I
 */
import Header2 from "../components/Header2";
import Head from "next/head";
import { Card } from "antd";
import Footer from "../components/Footer";
import Axios from "axios";
import { api_url } from "../utils/config";

const Life = props => {
  const { Meta } = Card;
  const ins = props.data;
  return (
    <>
      <Head>
        <title>eswang的个人网站</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header2 />
      <div className='life_base'>
        {ins.map(item => (
          <div key={item._id} className={item._id}>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt={item.date} src={item.image} />}>
              <Meta title={item.date} description={item.content} />
            </Card>
          </div>
        ))}
      </div>
      <Footer />
      <style jsx>
        {`
          .life_base {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            background-color: #fff;
            margin: 2rem 10vw;
            border: 1px solid #333;
            border-radius: 0.8rem;
            padding: 2rem;
          }
          .life_base > div {
            margin: 1rem;
          }
        `}
      </style>
    </>
  );
};

Life.getInitialProps = async () => {
  let res = await Axios.get(`${api_url}/lives`);
  return { data: res.data };
};

export default Life;
