import React from "react";
import { Layout, MainPost, OtherPost, Main } from "../components";
import SecondPost from "../components/SecondPost";

export default ({
  data: {
    allFile: { edges }
  }
}) => {
  const someText =
    "Richard McClintock, a Latin professor at Hampden - Sydney College in Virginia Richard McClintock, a Latin professor at Hampden - Sydney College in VirginiaRichard McClintock, a Latin professor at Hampden - Sydney College in VirginiaRichard McClintock, a Latin professor at Hampden - Sydney College in VirginiaRichard McClintock, a Latin professor at Hampden - Sydney College in VirginiaRichard McClintock, a Latin professor at Hampden - Sydney College in VirginiaRichard McClintock, a Latin professor at Hampden - Sydney College in VirginiaRichard McClintock, a Latin professor at Hampden - Sydney College in VirginiaRichard McClintock, a Latin professor at Hampden - Sydney College in VirginiaRichard McClintock, a Latin professor at Hampden - Sydney College in VirginiaRichard McClintock, a Latin professor at Hampden - Sydney College in VirginiaRichard McClintock, a Latin professor at Hampden - Sydney College in VirginiaRichard McClintock, a Latin professor at Hampden - Sydney College in VirginiaRichard McClintock, a Latin professor at Hampden - Sydney College in VirginiaRichard McClintock, a Latin professor at Hampden - Sydney College in VirginiaRichard McClintock, a Latin professor at Hampden - Sydney College in VirginiaRichard McClintock, a Latin professor at Hampden - Sydney College in VirginiaRichard McClintock, a Latin professor at Hampden - Sydney College in Virginia";
  console.log(
    edges[0].node.dir + "/" + edges[0].node.name + "." + edges[0].node.extension
  );
  return (
    <Layout>
      <Main>
        <MainPost title="GOOOOOOOOo">{someText};</MainPost>
        <SecondPost title="juju">{someText};</SecondPost>
        <OtherPost title="kdsjkd###############">
          icadsnhjldasnd jladsnhjld asndjld asndjld asndjld asndjld asndjld
          asndjld asndjld asndjld asndjld asndjld asndjld asndjld asndjld
          asndjld asndjld asndjld asndjld asndjld asndjld asndjla dsnhjl dasndj
          ladsnhjldasndj lanhjla nndakjldnl
        </OtherPost>
        <OtherPost title="kdsjkd###############">
          icadsnhjldasnd jladsnhjld asndjld asndjld asndjld asndjld asndjld
          asndjld asndjld asndjld asndjld asndjld asndjld asndjld asndjld
          asndjld asndjld asndjld asndjld asndjld asndjld asndjla dsnhjl dasndj
          ladsnhjldasndj lanhjla nndakjldnl
        </OtherPost>
        <OtherPost title="kdsjkd###############">
          icadsnhjldasnd jladsnhjld asndjld asndjld asndjld asndjld asndjld
          asndjld asndjld asndjld asndjld asndjld asndjld asndjld asndjld
          asndjld asndjld asndjld asndjld asndjld asndjld asndjla dsnhjl dasndj
          ladsnhjldasndj lanhjla nndakjldnl
        </OtherPost>
        <OtherPost title="kdsjkd###############">
          icadsnhjldasnd jladsnhjld asndjld asndjld asndjld asndjld asndjld
          asndjld asndjld asndjld asndjld asndjld asndjld asndjld asndjld
          asndjld asndjld asndjld asndjld asndjld asndjld asndjla dsnhjl dasndj
          ladsnhjldasndj lanhjla nndakjldnl
        </OtherPost>
        <OtherPost title="kdsjkd###############">
          icadsnhjldasnd jladsnhjld asndjld asndjld asndjld asndjld asndjld
          asndjld asndjld asndjld asndjld asndjld asndjld asndjld asndjld
          asndjld asndjld asndjld asndjld asndjld asndjld asndjla dsnhjl dasndj
          ladsnhjldasndj lanhjla nndakjldnl
        </OtherPost>
        <OtherPost title="kdsjkd###############">
          icadsnhjldasnd jladsnhjld asndjld asndjld asndjld asndjld asndjld
          asndjld asndjld asndjld asndjld asndjld asndjld asndjld asndjld
          asndjld asndjld asndjld asndjld asndjld asndjld asndjla dsnhjl dasndj
          ladsnhjldasndj lanhjla nndakjldnl
        </OtherPost>
        <OtherPost title="kdsjkd###############">
          icadsnhjldasnd jladsnhjld asndjld asndjld asndjld asndjld asndjld
          asndjld asndjld asndjld asndjld asndjld asndjld asndjld asndjld
          asndjld asndjld asndjld asndjld asndjld asndjld asndjla dsnhjl dasndj
          ladsnhjldasndj lanhjla nndakjldnl
        </OtherPost>
        <OtherPost title="kdsjkd###############">
          icadsnhjldasnd jladsnhjld asndjld asndjld asndjld asndjld asndjld
          asndjld asndjld asndjld asndjld asndjld asndjld asndjld asndjld
          asndjld asndjld asndjld asndjld asndjld asndjld asndjla dsnhjl dasndj
          ladsnhjldasndj lanhjla nndakjldnl
        </OtherPost>
      </Main>
    </Layout>
  );
};

export const query = graphql`
  {
    allFile {
      edges {
        node {
          extension
          dir
          name
        }
      }
    }
  }
`;
