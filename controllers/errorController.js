// module.exports = (err, req, res, next) => {
//     // console.log(err.stack)
//     err.statusCode = err.statusCode || 500
//     err.status = err.status || "error"

//     if(process.env.NODE_ENV === "development") {

//         res.status(err.statusCode).json({
//             status: err.status,
//             message: err.message,
//             error: err,
//             stack: err.stack
//         })
//         next()

//     } else if (process.env.NODE_ENV === "production"){
//       res.status(err.statusCode).json({
//         status: err.status,
//         message: err.message
//       })
//     }
// }

//PART 2-------------
const AppError = require("../Utils/appError");

const handleCastErrorDB = (err) => {
  const message = `Invalid ${err.path}: ${err.value}`;

  return new AppError(message, 400);
};

const handleDuplicateFieldsBD = (err) => {
  const value = err.errmsg.match(/(?<=")(?:\\.|[^"\\])*(?=")/);
  // console.log(value)

  const message = `Duplicate field values ${value} H. Please use another value`;
  return new AppError(message, 400);
};

const sendErrorDev = (err, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
    error: err,
    stack: err.stack,
  });
};

const handleValidationError = (err) => {
  const errors = Object.values(err.errors).map((el) => el.message);
  const message = `Invalid input Data. ${errors.join(". ")}`;

  return new AppError(message, 400);
};

const sendErrorProd = (err, res) => {
  if (err.isOperational) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  } else {
    res.status(500).json({
      status: "error",
      message: "Something went very wrong",
    });
  }
};

module.exports = (err, req, res, next) => {
  // console.log(err.stack)
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  if (process.env.NODE_ENV === "development") {
    sendErrorDev(err, res);
  } else if (process.env.NODE_ENV === "production") {
    let error = { ...err };
    if (error.name === "CastError") error = handleCastError(error);
    if (error.name === 11000) error = handleDuplicateFieldsBD(error);
    if (error.name === "ValidationError") error = handleValidationError(error);

    sendErrorProd(error, res);
  }
  next();
};
