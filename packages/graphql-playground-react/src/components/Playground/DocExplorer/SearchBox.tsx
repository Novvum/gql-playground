import * as React from 'react'
import debounce from 'graphiql/dist/utility/debounce'
import { Search } from '../../Icons'
import { styled, theme } from '../../../styled'

export interface Props {
  onSearch: (value: string) => void
  placeholder?: string
  clean?: boolean
}

export interface State {
  value: string
}

export default class SearchBox extends React.Component<Props, State> {
  private debouncedOnSearch: any

  constructor(props) {
    super(props)

    this.state = { value: '' }

    this.debouncedOnSearch = debounce(200, () => {
      this.props.onSearch(this.state.value)
    })
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.value !== this.state.value
  }

  render() {
    const LabelComponent = (
      <Label>
        <Search
          height={16}
          width={16}
          strokeWidth={3}
          color={theme.editorColours.punctuation}
        />
        <Input
          onChange={this.handleChange}
          type="text"
          value={this.state.value}
          placeholder={this.props.placeholder || 'Search the docs ...'}
        />
      </Label>
    )
    if (this.props.clean) {
      return LabelComponent
    }

    return <SearchContainer>{LabelComponent}</SearchContainer>
  }

  handleChange = event => {
    this.setState({ value: event.target.value })
    this.debouncedOnSearch()
  }
}

const SearchContainer = styled.div`
  position: relative;
  flex: 0 0 auto;
  z-index: 1;
  display: flex;
  padding: 25px 5px 25px 5px;
  background: ${p => `${p.theme.editorColours.editorColours}70`};
  border-bottom: 1px solid ${p => p.theme.editorColours.editorBackground};
  div {
    width: 100%;
  }
`

const Label = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding: 12px 0px 13px 15px;
  background: ${p => p.theme.editorColours.editorBackground};
  border-bottom: 1px solid ${p => p.theme.editorColours.punctuation};
`

const Input = styled.input`
  font-size: 16px;
  margin-left: 10px;
  background: transparent;
  color: ${p => p.theme.colours.text};
  &::placeholder {
    color: ${p => p.theme.editorColours.punctuation};
  }
`
