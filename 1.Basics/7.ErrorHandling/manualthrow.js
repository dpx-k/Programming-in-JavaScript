try{ 
    throw new ReferenceError()
} catch (err) { 
    console.log("There was an error executing the program, Refer the error log for more details")
    console.log(err)
}