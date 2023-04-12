import React, { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'

const useFetch = async () => {

  const supabaseUrl:string = import.meta.env.VITE_REACT_APP_SUPABASE_URL
  const supabaseKey:string = import.meta.env.VITE_REACT_APP_SUPABASE_KEY
  const supabase = createClient(supabaseUrl, supabaseKey)
  const [recipes, setRecipes] = useState<object>({});

  useEffect(() => {
    fetchData()
  }, [])

  
  const fetchData = async () => {
    let { data, error } = await supabase
      .from("recipes")
      .select("*")
      .order("id", { ascending: false });
      if (error) console.log("error", error);
      else {
        setRecipes(data)
        console.log(recipes)
      }
  }
}
  
export default useFetch;



