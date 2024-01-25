"use client";

export default function Error({
    error, reset,
}:{
    error: Error & {digest?: string};
    reset: () => void;
}) {
    return <div className="container mx-auto">
        <h2 className="font-heading text-red-900">
            Ooops, something went wrong!
        </h2>
        <button 
        className="btn-secondary mt-3"
        onClick={()=> reset()}
        > Try Again rr</button>
    </div>
}