import supabase from './init'

const { data, error } = await supabase.auth.signUp({
  email: 'example@emial.com',
  password: 'abcd1234!',
})
