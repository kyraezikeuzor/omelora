import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

// Container component
const Container = ({ children }:{children:React.ReactNode}) => {
  return (
    <div className="w-full flex flex-col gap-5">
      {children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

// ContainerTitle component
const ContainerTitle = ({ children, triggerLink }:{children:React.ReactNode, triggerLink:string}) => {
  return (
    <div className="w-full flex justify-between items-center py-2">
        <div className="text-2xl font-medium">
            {children}
        </div>
        <div>
            <Button path={triggerLink} variant="task">
                See All
            </Button>
        </div>
    </div>
  );
};


// ContainerContent component
const ContainerContent = ({ children }:{children:React.ReactNode}) => {
  const limitedChildren = React.Children.toArray(children).slice(0, 5);

  return (
    <div className="w-full flex flex-col gap-5 sm:grid sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-4">
      {limitedChildren}
    </div>
  );
};

ContainerContent.propTypes = {
  children: PropTypes.node.isRequired,
};

export { Container, ContainerTitle, ContainerContent };
