/** @jsx jsx */
import React from "react";
import { Styled, jsx } from "theme-ui";
import { Link } from "gatsby";
/**
 * Shadow me to add your own bio content
 */

export default () => (
  <div>
    <Styled.p>
      Words by <Styled.a href="http://example.com/">Jane Doe</Styled.a>.
      <br />
      Change me. This is all quite default. If you'd like.
    </Styled.p>
    <Styled.p>
      <Styled.a as={Link} to="/about">
        More about me
      </Styled.a>
    </Styled.p>
  </div>
);
