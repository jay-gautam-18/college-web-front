import Loader from "./Components/Loader"
import Mainroutes from "./routes/Mainroutes"
import { useEffect, useState } from 'react';
import { Suspense } from 'react';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="bg-[#ffecb9] syne-text">
      <Suspense fallback={<Loader />}>
        <Mainroutes/>
      </Suspense>
    </div>
    // <div>{msg}</div>
  )
}

export default App