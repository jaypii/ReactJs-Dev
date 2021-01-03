<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>PHP| MySQL | React.js | Axios Example</title>
      <script src= "https://unpkg.com/react@16/umd/react.production.min.js"></script>
      <script src= "https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
      <!-- Load Babel Compiler -->
      <script src="https://unpkg.com/babel-standalone@6.15.0/babel.min.js"></script>
      <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
      <!-- CSS Bootstrap -->
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
   </head>

   <body>
      <div class="container-fluid">
         <div id='root'></div>
      </div>

      <script  type="text/babel">
         class ContactForm extends React.Component {
            state = {
               name: '',
               email: '',
               country: '',
               city: '',
               job: '',

            }

            handleFormSubmit( event ) {
               event.preventDefault();
               let formData = new FormData();
               formData.append('name', this.state.name)
               formData.append('email', this.state.email)
               formData.append('city', this.state.city)
               formData.append('country', this.state.country)
               formData.append('job', this.state.job)

            axios({
                  method: 'post',
                  url: '/api/contacts.php',
                  data: formData,
                  config: { headers: {'Content-Type': 'multipart/form-data' }}
            })
            .then(function (response) {
               //handle success
               console.log(response)

            })
            .catch(function (response) {
               //handle error
               console.log(response)
            });
            }

            render(){
               return (
                  <div class="card mt-2 p-2">
                  <h3>Contact Form</h3>
                  <form class="row g-3">
                     <div class="col-md-6">
                        <label for="name" class="form-label">Name</label>
                        <input type="text" class="form-control" name="name" value={this.state.name}
                           onChange={e => this.setState({ name: e.target.value })}/>
                     </div>
                     <div class="col-md-6">
                        <label for="email" class="form-label">Email</label>
                        <input type="email" class="form-control" name="email" value={this.state.email}
                           onChange={e => this.setState({ email: e.target.value })}/>
                     </div>
                     <div class="row mt-2">
                        <div class="col-md-3">
                           <label for="country" class="form-label">Country</label>
                           <input type="text" class="form-control" name="country" value={this.state.country}
                              onChange={e => this.setState({ country: e.target.value })}/>
                        </div>
                        <div class="col-md-3">
                           <label for="city" class="form-label">City</label>
                           <input type="text" class="form-control" name="city" value={this.state.city}
                              onChange={e => this.setState({ city: e.target.value })}/>
                        </div>
                        <div class="col-md-6">
                           <label for="job" class="form-label">Job</label>
                           <input type="text" class="form-control" name="job" value={this.state.job}
                              onChange={e => this.setState({ job: e.target.value })}/>
                        </div>
                     </div>
                     <input type="submit" class="btn btn-primary w-25" onClick={e => this.handleFormSubmit(e)} value="Create Contact" />
                  </form>
                  </div>
               );
            }
         }
 
         class App extends React.Component {
            state = {
               contacts: []
            }

            componentDidMount() {
               const url = '/api/contacts.php'
               axios.get(url).then(response => response.data)
               .then((data) => {
                  this.setState({ contacts: data })
                  console.log(this.state.contacts)
               })
            }

            render() {
               return (
                  <React.Fragment>
                     <h1>Contact Management</h1>
                     <ContactForm />
                     <table class="table" >
                        <thead>
                           <tr>
                              <th scope="col">Name</th>
                              <th scope="col">Email</th>
                              <th scope="col">Country</th>
                              <th scope="col">City</th>
                              <th scope="col">Job</th>     
                           </tr>
                        </thead>                          
                        <tbody>
                           {this.state.contacts.map((contact) => (
                           <tr>
                              <td>{ contact.name }</td>
                              <td>{ contact.email }</td>
                              <td>{ contact.country }</td>
                              <td>{ contact.city }</td>
                              <td>{ contact.job }</td>
                           </tr>
                           ))}
                        </tbody>
                     </table>

                  </React.Fragment>
               );
            }
         }

         ReactDOM.render(<App />, document.getElementById('root'));
      </script>
   </body>
</html>
