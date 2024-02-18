import React from "react";
import { Input } from "../../components/Input/Input";
import {useSelector, useDispatch} from 'react-redux'
import {addBooksToState} from '../../redux/shopSlice'

import { 
    SearchContainer,
    SearchDiv,
 } from "./styled";


// interface ActiveButtonProps {
//     text: string;
// }
// export const Search = ({text}: ActiveButtonProps) => {

export const SearchBooks = () => {

    const dispatch = useDispatch()
    const [books, setBookList] = useState<BookList[]>([]);
    const [getSearch, setSearch] = useState("Mark Twain")
    
    const [maxResult, setMaxResult] = useState("&maxResults=20")
    const [startIndex, setStartIndex] = useState("&startIndex=0")

    const handleSearch = useCallback((event: any) => {
        console.log("handleSearch", event.target.value)
        setSearch(event.target.value)
    }, [])

    const handleSelectThemeChange = useCallback((event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedTheme(event.target.value)
    }, [])

    const handleSortResultChange = useCallback((event: React.ChangeEvent<HTMLSelectElement>) => {
        setSortedResult(event.target.value)
    }, [])

    const findRequest = `https://www.googleapis.com/books/v1/volumes?q=${getSearch}`;

    const getRequest = () => {
        axios.get(findRequest)
        .then((response) => {
            const data = response.data;

            console.log(1, response.data);
            console.log(2, response.data.items);
            console.log(3, findRequest);

            dispatch(addBooksToState({
                books: data.items,
                totalBooks: data.totalItems,
            }));

            return setBookList;
        })
            .catch(error => console.log('Response server error'))
    }

    const handleButtonClick = useCallback(async () => {
        console.log('Clicked!')
        console.log(findRequest)
        console.log([getSearch, setSearch],   [startIndex, setStartIndex])
        // data -> redux state;
        await getRequest()

    }, [getSearch, startIndex])

            // 
            // 
            //   
            //       
            //   
            // 

export const Search = () => {
  return (
  <SearchContainer>
  <SearchDiv>
                {/* <Input
                    value={getSearch}
                    onChange={handleSearch}
                /> */}
                {/* <Button onClick={handleButtonClick}/> */}
</SearchDiv>


  </SearchContainer>
  );
};
