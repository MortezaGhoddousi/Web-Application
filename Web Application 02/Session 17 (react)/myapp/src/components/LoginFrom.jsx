function LoginForm() {
    return ( 
        <form>
            <label htmlFor="username">
                <input type="text" name="username" placeholder="Username"/>
            </label>
            <label htmlFor="password">
                <input type="password" name="password" placeholder="password"/>
            </label>
            <label htmlFor="submit">
                <input type="submit" name="submit" value="Login"/>
            </label>
        </form>
     );
}



export default LoginForm;