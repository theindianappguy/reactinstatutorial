import React from "react";

export default function Comment({ username, caption }) {
  return (
    <div class="comment">
      <p>
        <span style={{ fontWeight: "500", marginRight: "4px" }}>
          {username}
        </span>
        {caption}
      </p>
    </div>
  );
}
