const Error = ({ children, ...props }) => {
    return (
      <div className="text-danger text-center fs-6"
        {...props}
      >
        {children}
      </div>
    )
  }
  
  export default Error