const logic = {
  _userId: sessionStorage.getItem('userId') || null,
  _token: sessionStorage.getItem('token') || null,
  login(username, password) {
    return fetch('http://localhost:5000/api/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then(res => res.json())
      .then(res => {
        if (res.error) throw Error(res.error)

        const { userId, token } = res.data

        this._userId = userId
        this._token = token

        sessionStorage.setItem('userId', userId)
        sessionStorage.setItem('token', token)
      })
  },
  getMyRations() {
    return fetch(`http://localhost:5000/api/rations/${this._userId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Authorization: `Bearer ${this._token}`,
      },
      body: JSON.stringify({
        createdBy: this._userId,
      }),
    })
      .then(res => res.json())
      .then(res => {
        if (res.error) throw Error(res.error)

        return res.data
      })
  },
  getUserInfo() {
    return fetch(`http://localhost:5000/api/user/${this._userId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Authorization: `Bearer ${this._token}`,
      },
    })
      .then(res => res.json())
      .then(res => {
        if (res.error) throw Error(res.error)

        return res.data
      })
  },
}

module.exports = logic
