const data = [
  {
    id : 0,
    title : "Describing the UI React",
    baseURL : "https://react.dev/learn/describing-the-ui",
    shortURL : "https://bit.ly/3MMW5UE",
    qr : "https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Freact.dev%2F&chs=180x180&choe=UTF-8&chld=L|2"
  }, 
  {
      id : 1,
      title : "React",
      baseURL : "https://react.dev/learn",
      shortURL : "https://bit.ly/3MMW5UE",
      qr : "https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Freact.dev%2F&chs=180x180&choe=UTF-8&chld=L|2"
    }, 
    {
        id : 2,
        title : "JSX",
        baseURL : "https://react.dev",
        shortURL : "https://bit.ly/3MMW5UE",
        qr : "https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Freact.dev%2F&chs=180x180&choe=UTF-8&chld=L|2"
      }
]


const LinkList = () =>
{
  const link = data.map(l => {
    return (
        <div className="hover:bg-gray-100 hover:rounded-lg mt-2 mx-2">
            <div className="flex ">
                <div className="flex flex-col flex-grow ml-8 my-3">

                  <span className="text-2xl font-semibold  hover:font-bold">{l.title}</span>

                  <span className="flex ml-2 mt-2">
                      <svg 
                        stroke="currentColor" 
                        fill="currentColor" 
                        stroke-width="0" 
                        viewBox="0 0 24 24" 
                        role="graphics-document" 
                        height="24" width="24" 
                        xmlns="http://www.w3.org/2000/svg"><title>redirect</title>
                        <path 
                          fill="none" 
                          d="M0 0h24v24H0V0z"></path><path 
                          d="M19 15l-6 6-1.42-1.42L15.17 16H4V4h2v10h9.17l-3.59-3.58L13 9l6 6z"></path>
                      </svg>

                      <a href={l.shortURL} className="hover:text-blue-700 text-xl font-semibold mr-8">{l.shortURL}</a>
                      
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" viewBox="0 0 24 24" 
                        stroke-width="1.5" 
                        stroke="currentColor" 
                        class="hover:text-blue-700 w-5 h-5 my-1"
                      >
                      <path 
                        stroke-linecap="round" 
                        stroke-linejoin="round" 
                        d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" 
                      />
                    </svg>
                  </span>

                  <a href={l.baseURL} className="hover:text-blue-700 text-sm w-1/3 ml-8 my-1">{l.baseURL}</a>

                </div>

                <div className="flex my-3 mx-10">

                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke-width="1.5" 
                      stroke="currentColor" 
                      class=" my-2 mx-6 w-6 h-6"
                    >
                      <path 
                        stroke-linecap="round" 
                        stroke-linejoin="round" 
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" 
                      />
                    </svg>

                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke-width="1.5" 
                      stroke="currentColor" 
                      class="my-2 w-6 h-6"
                    >
                      <path 
                        stroke-linecap="round" 
                        stroke-linejoin="round" 
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" 
                      />
                    </svg>

                </div>
            </div>
        </div>
    )
  })

  return(
    <div className="mt-0">{link}</div>
  )
}

export default LinkList