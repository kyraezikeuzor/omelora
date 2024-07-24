import React from 'react';

export const Emphasis = ({ emphasize, children }: {emphasize:Array<string>,children:React.ReactNode}) => {
  // Extract text content from children
  const text = React.Children.toArray(children).join(' ');

  // Create a regex pattern to match the words to emphasize
  const regex = new RegExp(`(${emphasize.join('|')})`, 'gi');

  // Split the text by the regex pattern
  const parts = text.split(regex);

  return (
    <>
      {parts.map((part, index) =>
        emphasize.some(word => word.toLowerCase() === part.toLowerCase()) ? (
          <span key={index} className="txt-gradient">{part}</span>
        ) : (
          <React.Fragment key={index}>{part}</React.Fragment>
        )
      )}
    </>
  );
};

